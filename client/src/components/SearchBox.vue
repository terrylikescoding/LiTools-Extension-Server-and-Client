<template>
    <form>
        <div class="input-group input-group-lg">
            
            <div class="input-group-prepend">
                <button v-if="searchModel" class="btn btn-circle" type="button"
                    @click.prevent="$emit('update:search-model', '')">
                    <i class="fas fa-times-circle"></i>
                </button>

            </div>
            <input type="text" class="form-control border-0 rounded-0" :placeholder="searchPlaceholder" :value="searchModel"
                @input="$emit('update:search-model', $event.target.value)" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary border-0 rounded-0" type="button" @click.prevent="searchCallBack">
                    search
                </button>
            </div>
        </div>
    </form>
</template>
  
<script>
export default {
    name: "SearchBox",
    props: {
        searchPlaceholder: {
            type: String,
            required: true,
        },
        searchCallBack: {
            type: Function,
            required: true,
        },
        searchModel: {
            type: String,
            required: true,
        },
    },
};
</script>
  
<style scoped>
.input-group-prepend>.btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: -1px;
}

.input-group-append>.btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>
  