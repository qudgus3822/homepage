// 2025-07-28, 김병현 수정 - JSONC 파싱 유틸리티 함수

/**
 * JSONC (JSON with Comments) 파일에서 주석을 제거하는 함수
 * - 한 줄 주석 (//) 제거
 * - 블록 주석 제거
 * - 문자열 내의 주석 문법은 보존
 */
export function removeJSONComments(jsonc: string): string {
  let result = "";
  let inString = false;
  let inSingleLineComment = false;
  let inMultiLineComment = false;
  let escapeNext = false;

  for (let i = 0; i < jsonc.length; i++) {
    const char = jsonc[i];
    const nextChar = jsonc[i + 1];

    // 이스케이프 문자 처리
    if (escapeNext) {
      if (!inSingleLineComment && !inMultiLineComment) {
        result += char;
      }
      escapeNext = false;
      continue;
    }

    // 백슬래시 처리 (문자열 내에서만)
    if (char === "\\" && inString) {
      if (!inSingleLineComment && !inMultiLineComment) {
        result += char;
      }
      escapeNext = true;
      continue;
    }

    // 문자열 시작/종료 처리
    if (char === '"' && !inSingleLineComment && !inMultiLineComment) {
      inString = !inString;
      result += char;
      continue;
    }

    // 문자열 내부에서는 주석 처리하지 않음
    if (inString) {
      result += char;
      continue;
    }

    // 한 줄 주석 시작
    if (!inMultiLineComment && char === "/" && nextChar === "/") {
      inSingleLineComment = true;
      i++; // 다음 '/' 건너뛰기
      continue;
    }

    // 블록 주석 시작
    if (!inSingleLineComment && char === "/" && nextChar === "*") {
      inMultiLineComment = true;
      i++; // 다음 '*' 건너뛰기
      continue;
    }

    // 블록 주석 종료
    if (inMultiLineComment && char === "*" && nextChar === "/") {
      inMultiLineComment = false;
      i++; // 다음 '/' 건너뛰기
      continue;
    }

    // 한 줄 주석 종료 (줄바꿈)
    if (inSingleLineComment && (char === "\n" || char === "\r")) {
      inSingleLineComment = false;
      result += char; // 줄바꿈은 유지
      continue;
    }

    // 주석 중이 아닐 때만 문자 추가
    if (!inSingleLineComment && !inMultiLineComment) {
      result += char;
    }
  }

  return result;
}

/**
 * JSONC 문자열을 파싱하여 JavaScript 객체로 변환
 */
export function parseJSONC<T = any>(jsonc: string): T {
  try {
    const cleanJson = removeJSONComments(jsonc);
    return JSON.parse(cleanJson);
  } catch (error) {
    throw new Error(
      `JSONC 파싱 에러: ${
        error instanceof Error ? error.message : "알 수 없는 오류"
      }`
    );
  }
}
