# audioPlayer
audio function library

### options
```el```: 容器元素  
```songList```: 列表(string || object{url: string}) 
```mutex```: 是否阻止多个播放器同时播放(bool)   
```playType```: loop列表循环, random列表随机 (修改options.playType即可修改播放列表)   
```errorIng```: 音乐加载错误时是否播放下一首(bool)    

### API
```play()```: 播放  
```pause()```: 暂停   
```toggle()```: 切换  
```next()```: 下一首  
```prev()```: 上一首  
```getBufferedPercent()```: 获取已缓冲百分比  
```getCurrentTimePercent()```: 获取当前播放百分比   

coding!!!!!