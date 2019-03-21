<template>
    <i class="k-spinner--signal"></i>
</template>

<script>
export default {
    name: 'k-spinner-signal'
}
</script>

<style lang="scss">
$duration: 1.25s;
$size: 64px;
$stroke-width: 0.075;

.k-spinner--signal {
    color: white;
    font-size: $size;
    width: 1em;
    height: 1em;
    position: relative;

    &::before {
        @extend %pseudo-signal;
    }

    &::after {
        @extend %pseudo-signal;
        animation-delay: -($duration/2);
    }
}

%pseudo-signal {
    content: '';
    border: ($size * $stroke-width) solid currentColor;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    animation-name: k-spinner-signal;
    animation-iteration-count: infinite;
    animation-duration: $duration;
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
    }
}
</style>
