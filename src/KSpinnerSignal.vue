<template>
    <i class="k-spinner--signal"></i>
</template>

<script>
export default {
    name: 'k-spinner-signal'
}
</script>

<style lang="scss">
.k-spinner--signal {
    --spinner-color: var(--color, black);
    --spinner-color-secondary: var(--color-secondary ,currentColor);
    --spinner-duration: 1.25s;
    --spinner-size: 64px;
    --spinner-stroke-width: 0.075;

    display: inline-flex;
    color: var(--spinner-color);
    font-size: var(--spinner-size);
    width: 1em;
    height: 1em;
    max-width: 1em;
    max-height: 1em;
    position: relative;

    &::before {
        @extend %pseudo-signal;
        border: calc(var(--spinner-size) * var(--spinner-stroke-width)) solid currentColor;
    }

    &::after {
        @extend %pseudo-signal;
        border: calc(var(--spinner-size) * var(--spinner-stroke-width)) solid currentColor;
        animation-delay: calc((var(--spinner-duration) / -2));
    }
}

%pseudo-signal {
    content: '';
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    animation-name: k-spinner-signal;
    animation-iteration-count: infinite;
    animation-duration: var(--spinner-duration);
    animation-timing-function: cubic-bezier(0, 0.2, 0.8, 1);
}

@keyframes k-spinner-signal {
    from {
        opacity: 1;
        transform: scale(0);
    }

    to {
        opacity: 0;
        transform: scale(100%);
        border-color: var(--spinner-color-secondary);
    }
}
</style>
