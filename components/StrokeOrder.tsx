"use client";

import { useState } from "react";

export default function StrokeOrder({
  code,
}: {
  code: string;
}) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  return (
    <div className="mt-2">
      {!show ? (
        <button
          onClick={() => {
                    setLoading(true);

                    setTimeout(() => {
                        setShow(true);
                        setLoading(false);
                    }, 250);
                    }}
          className="
            inline-flex
            items-center
            gap-1
            text-sm
            font-medium
            text-green-700
            hover:text-green-800
            hover:underline
          "
        >
          {loading ? "Loading..." : "▶ Stroke Order"}
        </button>
      ) : (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/10
            md:bg-black/20
          "
        >
          <div
            className="
              bg-white
              rounded-2xl
              shadow-xl
              border
              p-4
              w-[260px]
              md:w-[300px]
              transition-all
              duration-200
            "
          >
            <h3 className="text-sm font-semibold text-center mb-3">
              Stroke Order
            </h3>

            <object
              key={reloadKey}
              data={`/kanjivg/animated/${code}.svg`}
              type="image/svg+xml"
              width="220"
              height="220"
              className="mx-auto"
            />

            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={() => setReloadKey((prev) => prev + 1)}
                className="
                  px-3
                  py-1
                  text-sm
                  rounded-lg
                  bg-green-100
                  text-green-800
                  hover:bg-green-200
                "
              >
                🔄
              </button>

              <button
                onClick={() => setShow(false)}
                className="
                  px-3
                  py-1
                  text-sm
                  rounded-lg
                  bg-red-100
                  text-red-700
                  hover:bg-red-200
                "
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}