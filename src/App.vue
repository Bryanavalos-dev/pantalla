<template>
  <div class="mr-4 flex">
      <div class="block  bg-blue-800 h-screen w-12 ">
          
          <div class="p-2 cursor-pointer"><img src="data:image/png;base64,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" alt="" class="w-8 h-8"></div>
          <div class="p-2 cursor-pointer"><div class="rounded-full h-8 w-8 flex items-center justify-center bg-white text-center font-bold">AT</div></div>
          <div class="p-2 cursor-pointer "><svg class="w-8 h-8 " fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
          <div class="p-2 cursor-pointer "><svg class="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"  stroke-width="1" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div>
          <div class="p-2 cursor-pointer "><svg class="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"  stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>
          <div class="p-2 cursor-pointer "><svg class="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"  stroke-width="1" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div>
          <div class="p-2 cursor-pointer "><svg class="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"  stroke-width="1" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg></div>
          <div class="sapce-y-56 p-2 pt-64 mt-32 cursor-pointer"><img src="https://assets.stickpng.com/images/58428cc1a6515b1e0ad75ab1.png" alt="" class="rounded-full w-8 h-8" ></div>
      </div>
      <div class=" block border-solid border-2 w-95">
          <div class="flex">
            <div class="block m-4 mr-2"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>
            <div class="block mt-4 mr-4 font-bold font-sans"><h3>Mi perfil</h3></div>
          </div>
          <div class="w-48 h-40  border-4 border-solid rounded-full m-4 mr-12 ml-12 items-center flex-row justify-center  border-gray-500 "><img  src="https://assets.stickpng.com/images/58428cc1a6515b1e0ad75ab1.png" alt="" class="rounded-full h-full w-full " ></div>

          <div class="bg-gray-300 p-3 m-2 mt-12 h-8 flex items-center flex-row justify-right">
            <div ><svg class="w-4 h-4" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>
            <div class="pl-3"> Mi perfil</div>
          </div>
          <div class="white p-3 m-2 mt-2 h-8 flex items-center flex-row justify-right">
            <div ><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div>
            <div class="pl-3"> Cambiar contraseña</div>
          </div>
      </div>
      <div class=" inline border-solid border-1 text-xs flex-col  bg-gray-200 ">
        <div>
            
        </div>
        <h2 class="ml-6 mt-6 ">MI PERFIL</h2>
        <div class="border-solid border-1 bg-white p-4 ml-4 font-hairline mt-1 mr-4 ">
          <div class="inline-block w-100"> 
          <label for="" class="">Nombres</label>
          <el-input placeholder="Bryan Steve"  v-model="input"></el-input>
          </div>
          <div class="inline-block ml-4  w-100">
            <label for="">Apellidos</label>
            <el-input placeholder="Avalos Acosta" v-model="input"></el-input>
          </div>
          <div class="inline-block w-75  mt-2">
            <label for="">Apellidos</label>
            <el-input placeholder="bryan@ap-techno" v-model="input"></el-input>
          </div>
           <div class="inline-block w-75 ml-4 mt-2">
            <label for="">Perfil</label>
            <el-input placeholder="Dev" v-model="input"></el-input>
          </div>
           <div class="inline-block w-75 ml-4 mt-2">
            <label for="">Identificador</label>
            <el-input placeholder="1HGKS75" v-model="input"></el-input>
          </div>

        </div>
        

      </div>
      
      <div class=" inline border-solid border-2  bg-white p-2 ">
          <div class="h-48">&nbsp;</div>
          <div class=" justify-end flex-col mt-64 pt-64"><svg class="w-8 h-8 rounded-full bg-blue-800 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg></div>
      </div>
  </div>
</template>

<script>
 
</script>


