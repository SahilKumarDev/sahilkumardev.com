import Image from "next/image";
import Link from "next/link";

function Thanks() {
  return (
    <div className="thanks-item">
      <div className="">
        <Image
          src={"/icons/check.svg"}
          alt={"no-check"}
          width={100}
          height={100}
          className="color"
        />
      </div>
      <div className="thanks-content-box">
        <p className="thanks-item-text">
          Your submission is received and we will contact you soon
        </p>
        <Link href="/" className="thanks-home-page">
          Go back to Homepage{" "}
        </Link>
      </div>
    </div>
  );
}

export default Thanks;
