import { useState, useEffect, useRef } from 'react';

type VisibilityState = 'visible' | 'hidden' | 'prerender' | undefined;

const useDocumentVisibility = (): VisibilityState => {
  const [visibility, setVisibility] = useState<VisibilityState>(undefined);
  const documentRef = useRef<Document|null>(null);

  useEffect(() => {
    documentRef.current = document;
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setVisibility(documentRef.current?.visibilityState);
    };

    if (documentRef.current) {
      setVisibility(documentRef.current.visibilityState);
      documentRef.current.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        documentRef.current?.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, []);

  return visibility;
};

export default useDocumentVisibility;