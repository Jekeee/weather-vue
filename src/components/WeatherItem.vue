<template>
    <tr>
        <td><button class="dlt-btn" v-on:click="$emit('remove-city', city.id)">&times;</button></td>
        <td>
            {{ city.title }}
        </td>
        <td>{{ city.minT }}</td>
        <td>{{ city.maxT }}</td>
    </tr>
</template>

<script>
export default {
    props: ['city', 'index']
}
</script>

<style>
.dlt-btn {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    text-align: center;
}

td {
    text-align: center;
    border: 1px solid #000;
    align-content: center;
    padding: 1rem;

}
</style>