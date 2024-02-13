"use client";
import React from "react";
import styled from "styled-components";

export default function ParallelRouteModal() {
  return <ParallelModalStyle>여기는 모달 페이지 입니다.</ParallelModalStyle>;
}

const ParallelModalStyle = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  transform: translate(50%, 50%);
  z-index: 100;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
`;
