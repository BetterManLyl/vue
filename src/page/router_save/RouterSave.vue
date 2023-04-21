<template>
  <section class="signature">
    <div class="signatureBox">
      <div class="canvasBox" ref="canvasHW">
        <canvas ref="canvasF" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'
          @mousedown="mouseDown" @mousemove="mouseMove" @mouseup="mouseUp"></canvas>
        <div class="btnBox">
          <div><span @click="overwrite">重写</span></div>
          <div><span @click="commit">提交签名</span></div>

          <div><span @click="laststep">上一步</span></div>
          <div><span @click="nextstsp">下一步</span></div>
        </div>
      </div>
      <img class="imgCanvas" :src="imgUrl" alt="绘制的签名">
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stageInfo: '',
      imgUrl: '',
      client: {},
      points: [],
      canvasTxt: null,
      startX: 0,
      startY: 0,
      moveY: 0,
      moveX: 0,
      endY: 0,
      endX: 0,
      w: null,
      h: null,
      isDown: false,
      // isViewAutograph: this.$route.query.isViews > 0,
      // contractSuccess: this.$route.query.contractSuccess
    }
  },
  mounted() {
    let canvas = this.$refs.canvasF
    // canvas.height = this.$refs.canvasHW.offsetHeight - 500
    // canvas.width = this.$refs.canvasHW.offsetWidth - 50

    canvas.height = this.$refs.canvasHW.offsetHeight - 500
    canvas.width = this.$refs.canvasHW.offsetWidth - 2


    this.canvasTxt = canvas.getContext('2d')
    this.stageInfo = canvas.getBoundingClientRect()
    this.overwrite()
  },
  methods: {

    laststep() {
      console.log("1111111")
      this.points = this.points.pop();
    },
    nextstsp() {
      console.log("222222222")
    },

    //mobile
    touchStart(ev) {
      ev = ev || event
      ev.preventDefault()
      if (ev.touches.length == 1) {
        let obj = {
          x: ev.targetTouches[0].clienX,
          y: ev.targetTouches[0].clientY,
        }
        this.startX = obj.x
        this.startY = obj.y
        this.canvasTxt.beginPath()
        this.canvasTxt.moveTo(this.startX, this.startY)
        this.canvasTxt.lineTo(obj.x, obj.y)
        this.canvasTxt.stroke()
        this.canvasTxt.closePath()
        this.points.push(obj)
      }
    },
    touchMove(ev) {
      ev = ev || event
      ev.preventDefault()
      if (ev.touches.length == 1) {
        let obj = {
          x: ev.targetTouches[0].clientX - this.stageInfo.left,
          y: ev.targetTouches[0].clientY - this.stageInfo.top
        }
        this.moveY = obj.y
        this.moveX = obj.x
        this.canvasTxt.beginPath()
        this.canvasTxt.moveTo(this.startX, this.startY)
        this.canvasTxt.lineTo(obj.x, obj.y)
        this.canvasTxt.stroke()
        this.canvasTxt.closePath()
        this.startY = obj.y
        this.startX = obj.x
        this.points.push(obj)
      }
    },
    touchEnd(ev) {
      ev = ev || event
      ev.preventDefault()
      if (ev.touches.length == 1) {
        let obj = {
          x: ev.targetTouches[0].clientX - this.stageInfo.left,
          y: ev.targetTouches[0].clientY - this.stageInfo.top
        }
        this.canvasTxt.beginPath()
        this.canvasTxt.moveTo(this.startX, this.startY)
        this.canvasTxt.lineTo(obj.x, obj.y)
        this.canvasTxt.stroke()
        this.canvasTxt.closePath()
        this.points.push(obj)
           this.canvasTxt.putImageData();
      }
    },
    //pc
    mouseDown(ev) {
      ev = ev || event
      ev.preventDefault()
      // if (true) {
      let obj = {
        x: ev.offsetX,
        y: ev.offsetY
      }
      this.startX = obj.x
      this.startY = obj.y
      this.canvasTxt.beginPath()
      this.canvasTxt.moveTo(this.startX, this.startY)
      this.canvasTxt.lineTo(obj.x, obj.y)
      this.canvasTxt.stroke()
      this.canvasTxt.closePath()
      this.points.push(obj)
      this.isDown = true
      // }
    },
    mouseMove(ev) {
      ev = ev || event
      ev.preventDefault()
      if (this.isDown) {
        let obj = {
          x: ev.offsetX,
          y: ev.offsetY
        }
        this.moveY = obj.y
        this.moveX = obj.x
        this.canvasTxt.beginPath()
        this.canvasTxt.moveTo(this.startX, this.startY)
        this.canvasTxt.lineTo(obj.x, obj.y)
        this.canvasTxt.stroke()
        this.canvasTxt.closePath()
        this.startY = obj.y
        this.startX = obj.x
        this.points.push(obj)
      }
    },
    mouseUp(ev) {
      ev = ev || event
      ev.preventDefault()
      // if (true) {
      let obj = {
        x: ev.offsetX,
        y: ev.offsetY
      }
      this.canvasTxt.beginPath()
      this.canvasTxt.moveTo(this.startX, this.startY)
      this.canvasTxt.lineTo(obj.x, obj.y)
      this.canvasTxt.stroke()
      this.canvasTxt.closePath()
      this.points.push(obj)
      this.points.push({ x: -1, y: -1 })
      this.isDown = false
      // }
    },
    //重写
    overwrite() {
      this.canvasTxt.clearRect(0, 0, this.$refs.canvasF.width, this.$refs.canvasF.height)
      this.points = []
    },
    //提交签名
    commit() {
      this.imgUrl = this.$refs.canvasF.toDataURL();
      console.log(this.$refs.canvasF.toDataURL()) //签名img回传后台
    }
  }
}
</script>

<style scoped >
.signatureBox {
  width: 400px;
  height: 500px;
  box-sizing: border-box;
  overflow: hidden;
  background: #fff;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.canvasBox {
  box-sizing: border-box;
  /* flex: 1; */
}

canvas {
  border: 1px solid #7d7d7d;
}

.btnBox {
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
}

.btnBox div {
  margin: 0 10px;
}

.btnBox div span {
  cursor: pointer;
}

.imgCanvas {
  width: 100%;
  height: 150px;
  border: 1px solid green;
}
</style>
