<template>
    <form>
        <div class="input-group input-group-lg">
            <input type="text" class="form-control border-0 rounded-0" :placeholder="searchPlaceholder" :value="searchModel"
                @input="$emit('update:search-model', $event.target.value)" />


            <div class="input-group-append">
                <button class="btn btn-outline-secondary border-0 rounded-0" type="button" @click.prevent="searchCallBack">
                    Search
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "SearchBox",
    data() {
        return {};
    },
    props: {
        searchPlaceholder: {
            type: String,
            required: true,
        },
        searchCallBack: {
            typeof: Function,
            required: true,
        },
        searchModel: {
            typeof: Object,
            required: true,
        },
    },
};
</script>

<style></style>