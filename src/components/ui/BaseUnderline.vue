<template>
  <div class="under">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.under {
  position: relative;
}
.under > *:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background: #bc8f8f;
  visibility: hidden;
  border-radius: 5px;
  transform: scaleX(0);
  transition: 0.25s linear;
}

.under > *:hover:before,
.under > *:focus:before {
  visibility: visible;
  transform: scaleX(1);
}
</style>