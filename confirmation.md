### Can do better

1. make departure and return compoennt into common component
2. change `hr` to `border-bottom`
3. conditional inside component
   Before

   ```html
   <Departure />
   <hr />
   <div v-if="returnflight">
     <Return />
     <hr />
   </div>
   ```

   Alternative Way, using template
   ```html
   <Departure />
   <hr />
   <template v-if="returnflight">
     <Return />
     <hr />
   </template>
   ```

   After
   ```html
   <Flight :title="t('departure')" :segment="departureSegment" />
   <Flight
     v-if="booking.trip === '2'"
     :title="t('return')"
     :segment="returnSegment"
   />
   ```
4. How handle data in flight detail.


# Good

1. Status order, title class.
