import React from "react";

export function EmailHeader() {
  return (
    <div className="p-4 pl-[72px] border-b border-gray-200">
      <div className="grid grid-cols-[80px_1fr] gap-x-8 gap-y-6">
        <label className="text-sm font-medium text-gray-600">Subject</label>
        <input
          type="text"
          className="text-sm text-gray-400 focus:outline-none"
          defaultValue="Craft Simple Email Templates."
        />

        <label className="text-sm font-medium text-gray-600">
          Preview text
        </label>
        <input
          type="text"
          className="text-sm text-gray-400 focus:outline-none"
          defaultValue="Preview text"
        />
      </div>
    </div>
  );
}
