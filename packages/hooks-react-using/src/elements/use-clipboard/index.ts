import { useState, useCallback } from 'react';

interface UseClipboardReturn {
  isSupported: boolean;
  copiedText: string;
  isCopied: boolean;
  copyToClipboard: (text: string) => void;
}

export const useClipboard = (): UseClipboardReturn => {
  const [isSupported, setIsSupported] = useState<boolean>(
    Boolean(navigator.clipboard),
  );
  const [copiedText, setCopiedText] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const fallbackCopyToClipboard = useCallback((text: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      document?.execCommand('copy');
      setCopiedText(text);
      setIsCopied(true);
    } catch (error) {
      console.error(error);
      setIsSupported(false);
    }

    document.body.removeChild(textarea);
  }, []);

  const handleCopy = useCallback(
    async (textToCopy: string) => {
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(textToCopy);
          setCopiedText(textToCopy);
          setIsCopied(true);
        } catch (error) {
          console.error(error);
          setIsSupported(false);
        }
      } else {
        fallbackCopyToClipboard(textToCopy);
      }
    },
    [setCopiedText, setIsCopied, fallbackCopyToClipboard],
  );

  const copyToClipboard = useCallback(
    (text: string) => {
      setIsCopied(false);
      handleCopy(text);
    },
    [handleCopy],
  );

  return {
    isSupported,
    copiedText,
    isCopied,
    copyToClipboard,
  };
};
