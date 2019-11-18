import { Component, Vue, Prop, Watch, Mixins } from 'vue-property-decorator';
import utils from '@/libs/utils';
import Touch from '@/libs/touch';
import emitter from '@/mixins/emit';

@Component({
    mixins:[emitter],
})
export default class pickerMixin extends Vue {
    @Prop(Boolean) readonly show;

    public pickerArray: Array<any> =[];
    public lens:Array<number> =[];

    public touch:Touch;
    public unitHeight: number; // 格子的高度
    public unitIndexs: Array<number> =[]; // 记录当前的数组索引
    public lastYs:Array<number> =[]; // 记录上一次停止的位置

    public startCb(target:any):void {
        utils.setCss(target,{
            'transition':'null'
        })
    }

    public moveCb(target:any,range:number,index:number):void{

        utils.setCss(target,{
            'transform':`translateY(${this.lastYs[index]+range}px)`
        });
    }

    public commonEndCb(target:any,endY:number,index:number){
        /**
         * todo:
         * 1. 判断最后落在哪个格子上
         * 2. 安全范围判断，头部不能超过(2*height);尾部不能超过-(count-3*height);
         * 3. 记得当前格子对应的数据索引，由于一列有5个格子，从0开始算，中间是2
         */
        this.lastYs[index] += endY;
        let min = this.lastYs[index] >0?Math.floor(this.lastYs[index] / this.unitHeight): Math.ceil(this.lastYs[index]/this.unitHeight);
        let max = this.lastYs[index] >0?min+1:min-1;
        let middleHeight = (min+max)/2*this.unitHeight;
        let current = 0;

        // 判断落在哪个格子上
        if (Math.abs(this.lastYs[index])>=Math.abs(middleHeight)){
            current = max;
        }else {
            current = min;
        }
        // 安全判断
        let maxLen = 0;
        let saleLen = 0;
        if (this.lens[index]<=3){
            maxLen = this.lens[index];
            saleLen = 4;
        }else {
            maxLen = this.lens[index]-3;
            saleLen = 2;
        }

        if (this.lastYs[index]>2*this.unitHeight){

            current = 2;
        }else if (this.lastYs[index]<0&&Math.abs(this.lastYs[index])>Math.abs((maxLen)*this.unitHeight)){

            current = -(this.lens[index]-3);
        }else if (endY<0&&Math.abs(this.lastYs[index])+2*this.unitHeight>Math.abs((maxLen-1)*this.unitHeight)&&maxLen<saleLen&&this.unitIndexs[index]<=maxLen){

            current = 3- maxLen;
        }
        console.log(Math.abs(this.lastYs[index]),current)
        let offsetY = current* this.unitHeight;
        this.lastYs[index] = offsetY;
        this.unitIndexs[index] = 2 - current;

        utils.setCss(target,{
            'transform':`translateY(${offsetY}px)`,
            'transition':'0.3s transform linear'
        });
    }

    private cancelHandler():void {
        this.$emit('update:show',false );
    }

    private sureHandler():void {
        this.$emit('update:show',false );
        let value =[];
        this.pickerArray.forEach((picker,i)=>{
            value.push(picker[this.unitIndexs[i]])
        })
        this.$emit('success',value );
        (this as any).dispatch('FormItem','vueUI.form.change',[value]);
    }
}