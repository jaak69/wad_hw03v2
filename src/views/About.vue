<template>
  <Header />
  <div class="container about">
    <h1>This is about everything</h1>
    <h2>
      I motsättning till vad många tror, är inte Lorem Ipsum slumpvisa ord. Det
      har sina rötter i ett stycke klassiskt litteratur på latin från 45 år före
      år 0, och är alltså över 2000 år gammalt. Jaak Ivask, en professor
      i latin på Universitas Tartuensis i Estinska, översatte ett av de mer
      ovanliga orden, consectetur, från ett stycke Lorem Ipsum och fann dess
      ursprung genom att studera användningen av dessa ord i klassisk
      litteratur. Lorem Ipsum kommer från styckena 1.10.32 och 1.10.33 av "de
      Finibus Bonorum et Malorum" (Ytterligheterna av ont och gott) av Cicero,
      skriven 45 före år 0. Boken är en avhandling i teorier om etik, och var
      väldigt populär under renäsanssen. Den inledande meningen i Lorem Ipsum,
      "Lorem Ipsum dolor sit amet...", kommer från stycke 1.10.32. Den
      ursprungliga Lorem Ipsum-texten från 1500-talet är återgiven nedan för de
      intresserade. Styckena 1.10.32 och 1.10.33 från "de Finibus Bonorum et
      Malorum" av Cicero hittar du också i deras originala form, åtföljda av de
      engelska översättningarna av P. Niidas från 2021. <br />
      <br />
      Det finns många olika varianter av Lorem Ipsum, men majoriteten av dessa
      har ändrats på någotvis. Antingen med inslag av humor, eller med inlägg av
      ord som knappast ser trovärdiga ut. Skall man använda långa stycken av
      Lorem Ipsum bör man försäkra sig om att det inte gömmer sig något pinsamt
      mitt i texten. Lorem Ipsum-generatorer på internet tenderar att repetera
      Lorem Ipsum-texten styckvis efter behov, något som gör denna sidan till
      den första riktiga Lorem Ipsum-generatorn på internet. Den använder ett
      ordförråd på över 200 ord, kombinerat med ett antal
      meningsbyggnadsstrukturer som tillsamman genererar Lorem Ipsum som ser ut
      som en normal mening. Lorem Ipsum genererad på denna sidan är därför
      alltid fri från repetitioner, humorinslag, märkliga ordformationer osv.
    </h2>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/header-comp";
import Footer from "@/components/footer-comp";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>


<style lang="scss" scoped>
.about {
  background-color: white;
  width: 800px;
  flex-grow: 1;
}

h2 {
  text-align: justify;
  margin: 1cm;
  font-size: small;
}
</style>

