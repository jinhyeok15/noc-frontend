import { Container } from "./container";

function KeywordInput(props) {
  return (
    <input type="text" class="keyword-input" autofocus/>
  );
}

function KeywordInputButton(props) {
  return (
    <button type="button" class="keyword-input-button">
      입력
    </button>
  );
}

export function Note(props) {
  return (
    <div class="main-screen">
      <KeywordInput/>
      <KeywordInputButton/>
      <Container/>
    </div>
  )
}
