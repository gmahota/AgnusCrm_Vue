<template>
  <div class="panel-body">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";

//component javascript
export default {
	components: {
		"vue-form-generator": VueFormGenerator.component
	}
};
</script>

