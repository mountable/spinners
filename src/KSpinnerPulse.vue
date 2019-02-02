<template>
    <i class="k-spinner--pulse"></i>
</template>

<script>
export default {
    name: 'k-spinner-pulse'
}
</script>

<style lang="scss">
$animation-duration: 2.0s;
$size: 64px;

.k-spinner--pulse {
    @extend %pulse;
    box-shadow: inset 0 0 1em 0 currentColor;
    display: inline-flex;
    font-size: $size;
    color: white;
    width: 1em;
    height: 1em;
    position: relative;

    &::before {
        @extend %pulse;
        @extend %pseudo-pulse;
    }

    &::after {
        @extend %pulse;
        @extend %pseudo-pulse;
        animation-delay: -($animation-duration/2);
    }
}

%pulse {
    border-radius: 50%;
}

%pseudo-pulse {
    content: '';
    background-color: currentColor;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.6;
    animation-name: k-pulse;
    animation-duration: $animation-duration;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes k-pulse {
    from, to {
        transform: scale(0);
    }

    50% {
        transform: scale(1);
    }
}
</style>
