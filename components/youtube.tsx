"use client";

import YoutubeCard from "@/components/ui/youtube-card";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { fetchYouTubeVideos, YouTubeVideoProps } from "@/lib/youtube";
import Spinner from "@/components/ui/spinner";

const Youtube: React.FC = () => {
  const [videos, setVideos] = useState<YouTubeVideoProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_YT_API_KEY!;
  const channelId = process.env.NEXT_PUBLIC_CHANNEL_ID!;

  const loadVideos = useCallback(
    async (pageToken?: string, isLoadMore = false) => {
      try {
        if (isLoadMore) {
          setLoadingMore(true);
        } else {
          setLoading(true);
          setError(null);
        }

        const result = await fetchYouTubeVideos(
          apiKey,
          channelId,
          6,
          pageToken
        );

        if (isLoadMore) {
          setVideos((prev) => [...prev, ...result.videos]);
        } else {
          setVideos(result.videos);
        }

        setNextPageToken(result.nextPageToken || null);
        setHasMore(!!result.nextPageToken);
      } catch (err) {
        console.error("YouTube API error", err);
        setError(err instanceof Error ? err.message : "Failed to fetch videos");
      } finally {
        if (isLoadMore) {
          setLoadingMore(false);
        } else {
          setLoading(false);
        }
      }
    },
    [apiKey, channelId]
  );

  const loadMore = useCallback(() => {
    if (nextPageToken && hasMore && !loadingMore) {
      loadVideos(nextPageToken, true);
    }
  }, [nextPageToken, hasMore, loadingMore, loadVideos]);

  useEffect(() => {
    const currentObserver = observer.current;
    const currentLoadMoreRef = loadMoreRef.current;

    if (currentObserver) {
      currentObserver.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          loadMore();
        }
      },
      {
        threshold: 1.0,
        rootMargin: "100px",
      }
    );

    if (currentLoadMoreRef) {
      observer.current.observe(currentLoadMoreRef);
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [hasMore, loadingMore, loadMore]);

  useEffect(() => {
    if (apiKey && channelId) {
      loadVideos();
    } else {
      setError("API key or channel ID is missing");
      setLoading(false);
    }
  }, [apiKey, channelId, loadVideos]);

  if (loading) {
    return (
      <article className="blog" data-page="blog">
        <header>
          <h2 className="h2 article-title title-text">YouTube</h2>
        </header>
        <div className="loading">Loading videos...</div>
      </article>
    );
  }

  if (error) {
    return (
      <article className="blog" data-page="blog">
        <header>
          <h2 className="h2 article-title title-text">YouTube</h2>
        </header>
        <div className="error">
          <p>Error: {error}</p>
          <button
            onClick={() => loadVideos()}
            className="retry-button"
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Retry
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title title-text">YouTube</h2>
      </header>

      {videos.length > 0 ? (
        <>
          <ul className="blog-posts-list">
            {videos.map((video) => (
              <YoutubeCard key={video.src} {...video} />
            ))}
          </ul>

          {hasMore && (
            <div ref={loadMoreRef} className="load-more-trigger">
              {loadingMore ? (
                <Spinner />
              ) : (
                <button
                  onClick={loadMore}
                  className="load-more-button"
                  style={{
                    width: "100%",
                    padding: "12px 24px",
                    backgroundColor: "#f8f9fa",
                    border: "2px solid #dee2e6",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#495057",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#e9ecef";
                    e.currentTarget.style.borderColor = "#adb5bd";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                    e.currentTarget.style.borderColor = "#dee2e6";
                  }}
                >
                  Load More Videos
                </button>
              )}
            </div>
          )}

          {!hasMore && videos.length > 0 && (
            <div
              className="end-message"
              style={{
                textAlign: "center",
                padding: "20px",
                color: "#6c757d",
                fontSize: "14px",
              }}
            >
              You&apos;ve reached the end of the videos!
            </div>
          )}
        </>
      ) : (
        <div className="no-videos">No videos found.</div>
      )}
    </article>
  );
};

export default Youtube;
