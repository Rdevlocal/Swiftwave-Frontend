import React, {
  useEffect,
  useRef,
  useState,
  MouseEventHandler,
  TouchEventHandler,
} from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  dir?: string;
  srcDoc?: string;
}

const Viewport = ({ children, dir, srcDoc }: Props) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [compContent, setCompContent] = useState<React.ReactPortal | null>(null);
  const [pressure, setPressure] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseUp = (e: React.MouseEvent) => {
      handleEvent(e);
      setPressure(false);
      if (iframeContainerRef.current) {
        iframeContainerRef.current.classList.remove("pointer-events-none");
        if (containerRef.current) {
          containerRef.current.style.cursor = "";
        }
      }
    };

    document.addEventListener("mouseup", handleMouseUp as unknown as EventListener);

    const iframeEl = iframeRef.current;
    if (iframeEl && iframeEl.contentWindow) {
      const iframeDoc = iframeEl.contentWindow.document;

      const onIframeLoad = () => {
        setCompContent(createPortal(children, iframeDoc.body));
        setLoaded(true);
      };

      iframeEl.addEventListener("load", onIframeLoad);

      if (iframeDoc.readyState === "complete") {
        onIframeLoad();
      }

      return () => {
        document.removeEventListener("mouseup", handleMouseUp as unknown as EventListener);
        iframeEl.removeEventListener("load", onIframeLoad);
      };
    }
  }, [children]);

  useEffect(() => {
    const handleIframeHeight = () => {
      const iframeEl = iframeRef.current;
      if (iframeEl?.contentWindow?.document?.body) {
        const iframeHeight = iframeEl.contentWindow.document.body.scrollHeight;
        iframeEl.style.height = `${iframeHeight}px`;
      }
    };

    if (loaded) {
      handleIframeHeight();

      const intervalId = setInterval(() => {
        handleIframeHeight();
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [loaded]);

  const handleEvent: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    handleEvent(e);
    setPressure(true);
    if (iframeContainerRef.current) {
      iframeContainerRef.current.classList.add("pointer-events-none");
    }
    if (containerRef.current) {
      containerRef.current.style.cursor = "ew-resize";
    }
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (pressure && iframeContainerRef.current && containerRef.current) {
      handleEvent(e);
      const x =
        e.clientX - containerRef.current.getBoundingClientRect().left;
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const newWidth = x >= 400 ? (x + 2 >= containerWidth ? "100%" : `${x}px`) : null;

      if (newWidth) {
        iframeContainerRef.current.style.width = newWidth;
      }
    }
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    if (iframeContainerRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const pageX = e.touches[0].pageX - containerRect.left;
      if (pageX >= 400) {
        iframeContainerRef.current.style.width = `${pageX}px`;
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden border border-zinc-800 rounded-lg"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div
        ref={iframeContainerRef}
        className="relative max-w-full min-w-full h-auto sm:min-w-[400px] sm:flex"
      >
        <iframe
          ref={iframeRef}
          className="w-full bg-white appearance-none mr-4 min-h-[300px] iframes"
          srcDoc={srcDoc}
          loading="lazy"
        />
        <div
          className="absolute top-0 right-0 items-center hidden w-5 h-full bg-zinc-700 border-l border-zinc-800 sm:flex"
          style={{ cursor: "ew-resize" }}
          onMouseDown={handleMouseDown}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-zinc-400 transform rotate-90 h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Viewport;
