import { useState, useEffect, useRef, useCallback } from 'react';

type VisibilityState = 'visible' | 'hidden' | 'prerender' | undefined;

const useDocumentVisibility = (): VisibilityState => {
  const [visibility, setVisibility] = useState<VisibilityState>(undefined);
  const documentRef = useRef<Document | null>(null);

  useEffect(() => {
    documentRef.current = document;
  }, []);

  const handleVisibilityChange = useCallback(() => {
    setVisibility(documentRef.current?.visibilityState);
  }, []);

  useEffect(() => {
    if (documentRef.current) {
      documentRef.current.addEventListener(
        'visibilitychange',
        handleVisibilityChange,
      );

      return () => {
        documentRef.current?.removeEventListener(
          'visibilitychange',
          handleVisibilityChange,
        );
      };
    }
  }, []);

  return visibility;
};

export default useDocumentVisibility;
