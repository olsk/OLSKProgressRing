<script>
export let OLSKProgressRingSize = 100;
export let OLSKProgressRingBaseSize = 10;
export let OLSKProgressRingValue = 1;

const circumference = OLSKProgressRingBaseSize * 2 * Math.PI;
</script>

<svg class="OLSKProgressRing" width={ OLSKProgressRingSize } height={ OLSKProgressRingSize }>

<circle class="OLSKProgressRingCircle" fill="transparent" r={ OLSKProgressRingBaseSize } cx={ OLSKProgressRingSize / 2 } cy={ OLSKProgressRingSize / 2 } stroke-dasharray={ `${ circumference } ${ circumference }` } stroke-dashoffset={ circumference - OLSKProgressRingValue * circumference } />

</svg>

<style>
:global(:root) {
  --OLSKProgressRingStrokeColor: black;
  --OLSKProgressRingStrokeWidth: 5;
}

.OLSKProgressRingCircle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;

  stroke: var(--OLSKProgressRingStrokeColor);
  stroke-width: var(--OLSKProgressRingStrokeWidth);
}
</style>
