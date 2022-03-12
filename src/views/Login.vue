<template>
  <div class="login flex">
    <div class="banner flex">
      <div class="marco"></div>
    </div>
    <div class="formulario flex flex-col justify-center items-center">
      <img
        src="https://res.cloudinary.com/dale-llanero/image/upload/v1646473543/Logo_Mesa_de_trabajo_1_cch7ak.png"
        alt="Logo"
        class="mb-9"
      />

      <h2 class="title text-3xl font-bold text-gray-700 mb-5">
        <span class="font-normal">Hola, </span>¡Te extrañé!
      </h2>

      <form action class="flex flex-col w-3/5" @submit.prevent="login">
        <div
          class="
            focus
            bg-gray-50
            mt-7
            flex
            w-full
            justify-between
            items-center
            px-4
            border-solid border-2 border-gray-200
            rounded-lg
          "
        >
          <input
            v-model="email"
            class="formularioInput bg-gray-50"
            type="email"
            id="email"
            required
            placeholder="Email"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </div>

        <div
          class="
            bg-gray-50
            mt-7
            flex
            w-full
            justify-between
            items-center
            px-4
            border-solid border-2 border-gray-200
            rounded-lg
          "
        >
          <input
            v-model="password"
            class="formularioInput bg-gray-50"
            :type="isType"
            id="password"
            placeholder="Contraseña"
          />
          <svg
            @click="changeView"
            v-if="view == true"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <svg
          @click="changeView"
            v-if="view == false"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        </div>
        <p v-if="error" class="error">
          Has introducido mal el email o la contraseña.
        </p>
        <input class="form-submit mt-10 p-4 rounded-xl" type="submit" value="Ingresar"/>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    view: true,
    type: false,
    email: "",
    password: "",
    error: false,
  }),
  methods: {
    login() {
      console.log(this.email);
      console.log(this.password);
    },

    changeView() {
      this.view = !this.view;
      this.type = !this.type;
    },
  },

  computed:{
    isType(){
      if(this.type){
        return "text"
      } return "password"
    }
  }

  /* mounted(){
  const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
});
}, */
};
</script>

<style scoped>
/* .swiper {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 100000;
  border-radius: 5px;
}

.swiper img {
  height: 402px;
  object-fit: cover;
} */

textarea:focus,
input:focus {
  outline: none;
}




.banner {
  width: 55%;
  height: 100vh;
  background: url("https://res.cloudinary.com/dale-llanero/image/upload/v1646472660/crumpled-white-paperboard_2_hvhzi8.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
}

.marco {
  background: url("https://res.cloudinary.com/dale-llanero/image/upload/v1646469662/marco_instagram_wbagbh.png");
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.formulario {
  width: 45%;
}

.formulario img {
  max-width: 130px;
}

.formularioInput {
  padding: 15px 5px;
  width: 50%;
}
</style>