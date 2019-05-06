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
    --color: black;
    --color-secondary: currentColor;
    --duration: 1.25s;
    --size: 64px;
    --stroke-width: 0.075;

    display: inline-flex;
    color: var(--color);
    font-size: var(--size);
    width: 1em;
    height: 1em;
    max-width: 1em;
    max-height: 1em;
    position: relative;

    &::before {
        @extend %pseudo-signal;
        border: calc(var(--size) * var(--stroke-width)) solid currentColor;
    }

    &::after {
        @extend %pseudo-signal;
        border: calc(var(--size) * var(--stroke-width)) solid currentColor;
        animation-delay: calc((var(--duration) / -2));
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
    animation-duration: var(--duration);
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
        border-color: var(--color-secondary);
    }
}
</style>
