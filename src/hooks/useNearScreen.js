import { useEffect, useState, useRef } from "react";

export function useNearScreen() {
  const [show, setShow] = useState(false);
  const element = useRef(null);

  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    observer.observe(element.current);
  }, []);

  return [show, element];
}
