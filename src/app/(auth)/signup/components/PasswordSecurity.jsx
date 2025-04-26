import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordSecurity = ({ isPasswordVisible, setIsPasswordVisible }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const waitForPreline = async () => {
      let retries = 100;
      while (retries--) {
        if (window.HSStrongPassword) {
          await window.HSStrongPassword.autoInit();
          setIsReady(true);
          break;
        }
        await new Promise((r) => setTimeout(r, 200)); // wait 200ms
      }
    };

    waitForPreline();
  }, []);

  return (
    <div className="max-w-sm">
      <div className="flex mb-2">
        <div className="flex-1 relative">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="hs-strong-password-with-indicator-and-hint"
            className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-md sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Enter password"
          />
          {isPasswordVisible ? (
            <FaEye
              className="absolute top-[25%] right-4 cursor-pointer"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          ) : (
            <FaEyeSlash
              className="absolute top-[25%]   right-4 cursor-pointer"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          )}
          <div
            id="hs-strong-password"
            data-hs-strong-password='{
              "target": "#hs-strong-password-with-indicator-and-hint",
              "hints": "#hs-strong-password-hints",
              "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-emerald-500 hs-strong-password-warning:bg-amber-500 hs-strong-password-danger:bg-red-500 h-2 flex-auto rounded-full bg-gray-200 opacity-50 mx-1"
            }'
            className="flex mt-2 -mx-1"
          >
            <div className="h-2 flex-auto rounded-full bg-gray-200 opacity-50 mx-1"></div>
            <div className="h-2 flex-auto rounded-full bg-gray-200 opacity-50 mx-1"></div>
            <div className="h-2 flex-auto rounded-full bg-gray-200 opacity-50 mx-1"></div>
          </div>
        </div>
      </div>

      <div id="hs-strong-password-hints" className="mb-3">
        <div>
          <span className="text-sm text-gray-800">Level:</span>
          <span
            data-hs-strong-password-hints-weakness-text='[" ", "Weak", "Medium", "Strong", "Very Strong", "Super Strong"]'
            className="text-sm font-semibold text-gray-800 ml-1"
          ></span>
        </div>
        <h4 className="my-2 text-sm font-semibold text-gray-800">
          Your password must contain:
        </h4>
        <ul className="space-y-1 text-sm text-gray-500">
          <li
            data-hs-strong-password-hints-rule-text="min-length"
            className="flex items-center gap-x-2"
          >
            <span className="hidden text-green-500" data-check="✓">
              ✓
            </span>
            <span className="text-gray-400" data-uncheck="✗">
              ✗
            </span>
            Minimum number of characters is 6.
          </li>
          <li
            data-hs-strong-password-hints-rule-text="lowercase"
            className="flex items-center gap-x-2"
          >
            <span className="hidden text-green-500" data-check="✓">
              ✓
            </span>
            <span className="text-gray-400" data-uncheck="✗">
              ✗
            </span>
            Should contain lowercase.
          </li>
          <li
            data-hs-strong-password-hints-rule-text="uppercase"
            className="flex items-center gap-x-2"
          >
            <span className="hidden text-green-500" data-check="✓">
              ✓
            </span>
            <span className="text-gray-400" data-uncheck="✗">
              ✗
            </span>
            Should contain uppercase.
          </li>
          <li
            data-hs-strong-password-hints-rule-text="numbers"
            className="flex items-center gap-x-2"
          >
            <span className="hidden text-green-500" data-check="✓">
              ✓
            </span>
            <span className="text-gray-400" data-uncheck="✗">
              ✗
            </span>
            Should contain numbers.
          </li>
          <li
            data-hs-strong-password-hints-rule-text="special-characters"
            className="flex items-center gap-x-2"
          >
            <span className="hidden text-green-500" data-check="✓">
              ✓
            </span>
            <span className="text-gray-400" data-uncheck="✗">
              ✗
            </span>
            Should contain special characters.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordSecurity;
