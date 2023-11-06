'use client';

import { FC, useEffect, useState } from "react";

export const Toaster: FC<any> = ({ isVisible, isSucess, message }) => {
  if (!isVisible) return null;

  return (
    isSucess
      ?
      <div className="bg-green-500 fixed right-4 top-4 px-4 py-2 text-base text-white font-semibold border-green-600 border-4">
        {!message ? "Sucesso!" : message}
      </div>
      :
      <div className=" bg-red-500 fixed right-4 top-4 px-4 py-2 text-base text-white font-semibold border-red-600 border-4">
        {!message ? 'Ops, algo ocorreu errado' : message}
      </div>
  );
};