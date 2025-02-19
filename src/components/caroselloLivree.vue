<script>
export default {
  data() {
    return {
      // Indice dell'immagine attualmente visibile
      currentImage: 0,
      // Array di immagini
      images: [
        {
            image:"/img/astonmartin.png",
            title:'ASTON MARTIN',
            model:'Vantage'
        },
        {
            image:"/img/bmw.png",
            title:'BMW',
            model:'Serie 4'
        },
        {
            image:"/img/ferrari.png",
            title:'FERRARI',
            model:'296 GTB'
        },
        {
            image: "/img/mclaren.png",
            title:'MCLAREN',
            model:'765 LT'
        },
        {
            image: "/img/mercedes.png",
            title:'MERCEDES',
            model:'AMG GT'
        },
        {
            image: "/img/porsche.png",
            title:'PORSCHE',
            model:'911 GTS'
        },
        
       ]
    };
  },

  methods: {
    // Passa alla prossima immagine
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
        this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
    }
  }
};
</script>

<!--<template>
    <div class="wrapperLivree">
        <div class="imgPosition">
            <img :src="images[currentImage].image"  alt="">
        </div>
        <div class="halfCOntainerLivree">
            <div>

            </div>
            <div class="secondContainer">
                <div >

                </div>

            </div>
            <div class="firstTn" >
                <p @click="nextImage" class=" poppins-semibold text-white text-left spacing cursor-pointer">- PREV </p>
            </div>
        </div>




        <div class="halfCOntainerLivree">
            <div class="thirdContainer">
                <div class="flex">
                </div>

            </div>
            <div class="secondContainer">
                <div>
                    <p  class=" poppins-semibold text-white text-left spacing cursor-pointer text-5xl"> {{ images[currentImage].title }} </p>
                    <p  class=" poppins-light text-white text-left spacing cursor-pointer text-xl"> {{ images[currentImage].model }} </p>
                </div>

            </div>
            <div class="thirdContainer">
                <p @click="nextImage" class=" poppins-semibold text-white text-left spacing cursor-pointer"> NEXT - </p>
            </div>
        </div>
        
    </div>

</template>-->

<!--<style scoped>
.wrapperLivree{
    position: relative;
    width: 100%;
    height: 500px;
    background-image: url(/img/DESIGN2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 20px;
    display: flex;
}
.sezioneTitle{
    width: 100%;
}
.imgPosition{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.wrapperInformation{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 20px;
}
.spacing{
    letter-spacing: 3px;
}
.halfCOntainerLivree{
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.secondContainer{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    padding-left: 250px;
    z-index: 6;
}
.thirdContainer{
    width: 100%;
    display: flex;
    justify-content: end;
}
.iconwid{
    width: 20px;
}
.thirdContainer p:hover{
    color: #9d191d;
}
.firstTn{
    width: 100%;
    display: flex;
    justify-content: start;
}
.firstTn p:hover{
    color: #9d191d;
}
@media (max-width: 767px) {
    .secondContainer{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    z-index: 6;
}
}
</style>-->
<template>
    <div class="containerGeneral">
        <div class="containerImg">
           <img :src="images[currentImage].image"  alt="">
        </div>
        <div class="containerName">
            <p  class=" poppins-semibold text-white text-left spacing cursor-pointer text-4xl"> {{ images[currentImage].title }} </p>
            <p  class=" poppins-light text-white text-left spacing cursor-pointer text-md"> {{ images[currentImage].model }} </p>
        </div>
        <div class="containerButton">
            <div>
                <p @click="nextImage" class=" poppins-semibold text-white text-left spacing cursor-pointer hobv">- PREV </p>
            </div>
            <div>
                <p @click="nextImage" class=" poppins-semibold text-white text-left spacing cursor-pointer hobv"> NEXT - </p>
            </div>

        </div>
    </div>

</template>

<style scoped>
.containerGeneral{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}
.containerImg{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(/img/DESIGN2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
.containerImg img{
    width: 40%;
}
.containerButton{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
}
.containerName{
    margin-top: -60px;
    z-index: 100;
}
.hobv:hover{
    color: #9d191d;
}
@media (max-width: 940px) {
    .containerImg img{
    width: 60%;
} 

.containerImg{
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(/img/DESIGN2.png);
    background-size:cover;
    background-repeat: no-repeat;
    position: relative;
}
}
@media (max-width: 820px) {
    .containerImg img{
    width: 50%;
} 
}
@media (max-width: 767px) {
    .containerImg img{
    width: 100%;
} 
}

</style>