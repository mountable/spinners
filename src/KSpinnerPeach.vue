<template>
    <i class="k-spinner--peach"></i>
</template>

<script>
export default {
    name: 'k-spinner-peach'
}
</script>

<style lang="scss">
$animation-duration: 2.0s;
$size: 64px;

.k-spinner--peach {
    @extend %peach;
    box-shadow: inset 0 0 1em 0 currentColor;
    display: inline-flex;
    font-size: $size;
    color: white;
    width: 1em;
    height: 1em;
    position: relative;

    &::before {
        @extend %peach;
        @extend %pseudo-peach;
    }

    &::after {
        @extend %peach;
        @extend %pseudo-peach;
        animation-delay: -($animation-duration/2);
    }
}

%peach {
    border-radius: 50%;
}

%pseudo-peach {
    content: '';
    background-color: currentColor;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.6;
    animation-name: k-peach;
    animation-duration: $animation-duration;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes k-peach {
    from, to {
        transform: scale(0);
    }

    50% {
        transform: scale(1);
    }
}
</style>
