function RayoutContainer(props) {
  return (
    <div class="rayout-container"></div>
  )
}

function MainContainer(props) {
  return (
    <div class="main-container"></div>
  )
}

function KeywordDetailContainer(props) {
  return (
    <div class="keyword-detail-container"></div>
  )
}

export function Container(props) {
  return (
    <div class="container-screen">
      <RayoutContainer/>
      <MainContainer/>
      <KeywordDetailContainer/>
    </div>
  )
}
