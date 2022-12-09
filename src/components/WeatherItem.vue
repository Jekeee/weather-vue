<template>
    <tr>
        
        <td>
            {{ city.title }}
        </td>
        <td>{{ city.minT }}</td>
        <td>{{ city.maxT }}</td>
        <td><img src="../img/remove.png" alt="logo-del" v-on:click="$emit('remove-city', city.id)" class="dlt-btn"/></td>
    </tr>
</template>

<script>
export default {
    props: ['city', 'index']
}
</script>

<style>
.dlt-btn {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
}



td {
    text-align: center;
    border: 1px solid #000;
    align-content: center;
    padding: 1rem;

}
</style>