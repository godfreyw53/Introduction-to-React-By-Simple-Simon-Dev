import { useRef, useEffect} from 'react'

export function useAutoScroll(dependencies) {
        // It's highly recommend to rename this to something
        // more generic like containerRef. This will make the
        // code make more sense if we ever reuse this code in
        // other components.
        const containerRef = useRef(null);

        useEffect(() => {
        //  const containerElem = chatMessagesRef.current;
          const containerElem = containerRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
      //  }, [chatMessages]);
        }, [dependencies]);

        return containerRef;
      }
    