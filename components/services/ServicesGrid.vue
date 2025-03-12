<template>
  <div class="px-6">
    <div class="mx-auto my-24 flex max-w-screen-2xl flex-col gap-12 py-28">
      <h2
        class="font-theme mb-6 text-center text-5xl font-semibold tracking-wide"
      >
        Services
      </h2>

      <ServicesDetail
        title="Web development"
        service="
        Do you need a website or web applications that is fast, secure and easy to use? I use the latest technologies to make sure your website is future-proof.
    "
        image-location="services/IMG_7642_fdrbiz"
      />
      <ServicesDetail
        title="Consultancy"
        service="
        Do you need advice on how to improve your website or web application? I can also help you with setting up a new website or web application.
    "
        image-location="services/IMG_8357_psekmc"
      />
      <ServicesDetail
        title="Audit"
        service="
        Do you want to know how your website or web application is performing? I can help you with that.
    "
        image-location="services/IMG_7482_haagdo"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
