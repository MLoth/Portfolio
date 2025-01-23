<template>
  <div
    class="max-w-screen mx-auto my-48 grid gap-12 align-baseline md:grid-cols-12"
  >
    <h2
      class="font-theme mb-6 text-center text-5xl font-semibold tracking-wide md:col-span-12"
    >
      Services
    </h2>

    <ServicesDetail
      title="Web development"
      service="
        Do you need a website or web applications that is fast, secure and easy to use? I use the latest technologies to make sure your website is future-proof.
    "
    >
      <template #icon>
        <CodeXml />
      </template>
    </ServicesDetail>
    <ServicesDetail
      title="Consultancy"
      service="
        Do you need advice on how to improve your website or web application? I can also help you with setting up a new website or web application.
    "
    >
      <template #icon>
        <HeartHandshake />
      </template>
    </ServicesDetail>
    <ServicesDetail
      title="Audit"
      service="
        Do you want to know how your website or web application is performing? I can help you with that.
    "
    >
      <template #icon>
        <Hourglass />
      </template>
    </ServicesDetail>
  </div>
</template>

<script lang="ts" setup>
import { CodeXml, Hourglass, HeartHandshake } from 'lucide-vue-next'
</script>
