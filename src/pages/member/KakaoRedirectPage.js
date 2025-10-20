// src/pages/member/KakaoRedirectPage.js
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";

const KakaoRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get("code");

  useEffect(() => {
    if (!authCode) return;
    (async () => {
      try {
        const accessToken = await getAccessToken(authCode);
        console.log("kakao access_token:", accessToken);
        getMemberWithAccessToken(accessToken).then((memberInfo) => {
          console.log(memberInfo);
        });
      } catch (e) {
        // 네트워크 탭/콘솔에서 CORS 여부 꼭 확인
        alert("카카오 토큰 교환 실패");
      }
    })(); //IIFE
  }, [authCode]);

  return (
    <div>
      <div>Kakao Login Redirect</div>
      <div>{authCode}</div>
    </div>
  );
};

export default KakaoRedirectPage;
