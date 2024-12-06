'use client';
import { useEffect, useState } from 'react';

const useUnityDevicePixelRatio = () => {
  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  useEffect(() => {
    const updateDevicePixelRatio = function () {
      const newDevicePixelRatio = window.devicePixelRatio;
      setDevicePixelRatio(newDevicePixelRatio);

      if (
        // @ts-ignore
        window?.unityInstance &&
        // @ts-ignore
        typeof window?.unityInstance.devicePixelRatio === 'function'
      ) {
        // @ts-ignore
        window?.unityInstance.devicePixelRatio(newDevicePixelRatio);
      }
    };

    const mediaMatcher = window.matchMedia(
      `screen and (resolution: ${devicePixelRatio}dppx)`
    );
    mediaMatcher.addEventListener('change', updateDevicePixelRatio);
    updateDevicePixelRatio();

    return function () {
      mediaMatcher.removeEventListener('change', updateDevicePixelRatio);
    };
  }, [devicePixelRatio]);

  return devicePixelRatio;
};

export default useUnityDevicePixelRatio;
