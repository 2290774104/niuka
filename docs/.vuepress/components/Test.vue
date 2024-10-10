<script lang="tsx">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component({})
export default class Test extends Vue {
  public num = 1;

  render() {
    return <div>123{this.num}</div>
  }
}
</script>
