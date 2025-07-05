export interface YouTubeVideoProps {
  id?: string;
  title: string;
  description: string;
  link: string;
  src: string;
  publishedAt?: string;
  thumbnails?: {
    default?: { url: string; width: number; height: number };
    medium?: { url: string; width: number; height: number };
    high?: { url: string; width: number; height: number };
  };
}

interface YouTubeAPIResponse {
  items: Array<{
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
      description: string;
      publishedAt: string;
      thumbnails: {
        default?: { url: string; width: number; height: number };
        medium?: { url: string; width: number; height: number };
        high?: { url: string; width: number; height: number };
      };
    };
  }>;
  nextPageToken?: string;
  prevPageToken?: string;
}

export interface YouTubeVideosResult {
  videos: YouTubeVideoProps[];
  nextPageToken?: string;
  totalResults?: number;
}

const YOUTUBE_API_BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function fetchYouTubeVideos(
  apiKey: string,
  channelId: string,
  maxResults: number = 8,
  pageToken?: string
): Promise<YouTubeVideosResult> {
  if (!apiKey) {
    throw new Error("YouTube API key is required");
  }

  if (!channelId) {
    throw new Error("Channel ID is required");
  }

  const params = new URLSearchParams({
    key: apiKey,
    channelId: channelId,
    part: "snippet",
    order: "date",
    type: "video",
    maxResults: Math.min(maxResults, 50).toString(),
  });

  if (pageToken) {
    params.append("pageToken", pageToken);
  }

  const url = `${YOUTUBE_API_BASE_URL}/search?${params.toString()}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error("YouTube API quota exceeded or invalid API key");
      } else if (response.status === 404) {
        throw new Error("Channel not found");
      } else {
        throw new Error(
          `YouTube API error: ${response.status} ${response.statusText}`
        );
      }
    }

    const data: YouTubeAPIResponse = await response.json();

    if (!data.items || data.items.length === 0) {
      return {
        videos: [],
        nextPageToken: undefined,
      };
    }

    const videos = data.items.map((item): YouTubeVideoProps => {
      const videoId = item.id.videoId;
      const snippet = item.snippet;

      return {
        id: videoId,
        title: snippet.title,
        description: snippet.description,
        link: `https://www.youtube.com/watch?v=${videoId}`,
        src:
          snippet.thumbnails?.high?.url ||
          snippet.thumbnails?.medium?.url ||
          snippet.thumbnails?.default?.url ||
          "",
        publishedAt: snippet.publishedAt,
        thumbnails: snippet.thumbnails,
      };
    });

    return {
      videos,
      nextPageToken: data.nextPageToken,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(
      "An unexpected error occurred while fetching YouTube videos"
    );
  }
}
