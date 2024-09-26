import CardImage from "Components/CardImage/CardImage";
import GlobalContext from "Global/GlobalContext";
import React from "react";
import Container from "Styles/Container";

function SearchPage() {
  const { filteredImages } = React.useContext(GlobalContext);

  const searchImages = filteredImages?.map((photo) => (
    <CardImage key={photo.id} photos={photo} />
  ));
  return (
    <div>
      <Container style={{ textAlign: "center" }}>{searchImages}</Container>
    </div>
  );
}

export default SearchPage;
