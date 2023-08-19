"use client"

import React, { useContext } from "react";
import { CepContext } from "@/context/cepContext";

import { FormSearch } from "../components/FormSearch";
import { CepResult } from "@/components/CepResult";

export default function Home() {
  const {infos} = useContext(CepContext)

  return (
    <>
      <FormSearch />
      {infos && <CepResult />}
    </>
  )
}
