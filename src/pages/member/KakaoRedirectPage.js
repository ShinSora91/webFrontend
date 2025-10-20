// src/pages/member/KakaoRedirectPage.js
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";
import { useDispatch } from "react-redux";
import useCustomLogin from "../../hooks/useCustomLogin";
import { login } from "../../slices/loginSlice";

const KakaoRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const { moveToPath } = useCustomLogin();
  const dispatch = useDispatch();
  const authCode = searchParams.get("code");

  //   useEffect(() => {
  //     getAccessToken(authCode).then((accessToken) => {
  //       getMemberWithAccessToken(accessToken).then((memberInfo) => {
  //         dispatch(login(memberInfo));
  //         if (memberInfo && !memberInfo.social) {
  //           //소셜 회원이 아니라면
  //           moveToPath("/");
  //         } else {
  //           moveToPath("/member/modify");
  //         }
  //       });
  //     });
  //   }, [authCode]);

  useEffect(() => {
    if (!authCode) return;
    (async () => {
      try {
        const accessToken = await getAccessToken(authCode);
        console.log("kakao access_token:", accessToken);
        getMemberWithAccessToken(accessToken).then((memberInfo) => {
          console.log(memberInfo);
          dispatch(login(memberInfo));
          if (memberInfo && !memberInfo.social) {
            moveToPath("/");
          } else {
            moveToPath("/member/modify");
          }
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
