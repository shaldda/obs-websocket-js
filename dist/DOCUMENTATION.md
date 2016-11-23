## Classes

<dl>
<dt><a href="#OBSSource">OBSSource</a></dt>
<dd></dd>
<dt><a href="#OBSScene">OBSScene</a></dt>
<dd></dd>
<dt><a href="#OBSWebSocket">OBSWebSocket</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#getVersionCb">getVersionCb</a> : <code>function</code></dt>
<dd><p>Callback for GetVersion.</p>
</dd>
<dt><a href="#getAuthRequiredCb">getAuthRequiredCb</a> : <code>function</code></dt>
<dd><p>Callback for getAuthRequired.</p>
</dd>
<dt><a href="#getCurrentSceneCb">getCurrentSceneCb</a> : <code>function</code></dt>
<dd><p>Callback for getCurrentScene.</p>
</dd>
<dt><a href="#getSceneListCb">getSceneListCb</a> : <code>function</code></dt>
<dd><p>Callback for getSceneList.</p>
</dd>
<dt><a href="#getStreamStatusCb">getStreamStatusCb</a> : <code>function</code></dt>
<dd><p>Callback for getStreamStatus.</p>
</dd>
<dt><a href="#getTransitionListCb">getTransitionListCb</a> : <code>function</code></dt>
<dd><p>Callback for getTransitionList.</p>
</dd>
<dt><a href="#getCurrentTransitionCb">getCurrentTransitionCb</a> : <code>function</code></dt>
<dd><p>Callback for getCurrentTransition.</p>
</dd>
</dl>

<a name="OBSSource"></a>

## OBSSource
**Kind**: global class  
<a name="new_OBSSource_new"></a>

### new OBSSource(name, type, x, y, boundsX, boundsY, volume, visible)

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Source name. |
| type | <code>string</code> | Type. |
| x | <code>double</code> | X position. |
| y | <code>double</code> | Y position. |
| boundsX | <code>double</code> | BoundsX. |
| boundsY | <code>double</code> | BoundsY. |
| volume | <code>double</code> | Source Volume. |
| visible | <code>bool</code> | Scene visibility. |

<a name="OBSScene"></a>

## OBSScene
**Kind**: global class  
<a name="new_OBSScene_new"></a>

### new OBSScene(name, sources)

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Source name. |
| sources | <code>[Array.&lt;OBSSource&gt;](#OBSSource)</code> | Array of [OBSSource](#OBSSource)s. |

<a name="OBSWebSocket"></a>

## OBSWebSocket
**Kind**: global class  

* [OBSWebSocket](#OBSWebSocket)
    * _listener_
        * [.onConnectionOpened()](#OBSWebSocket+onConnectionOpened)
        * [.onConnectionClosed()](#OBSWebSocket+onConnectionClosed)
        * [.onConnectionFailed()](#OBSWebSocket+onConnectionFailed)
        * [.onAuthenticationSuccess()](#OBSWebSocket+onAuthenticationSuccess)
        * [.onAuthenticationFailure()](#OBSWebSocket+onAuthenticationFailure)
        * [.onSceneSwitch()](#OBSWebSocket+onSceneSwitch)
        * [.onSceneListChanged()](#OBSWebSocket+onSceneListChanged)
        * [.onStreamStarting()](#OBSWebSocket+onStreamStarting)
        * [.onStreamStarted()](#OBSWebSocket+onStreamStarted)
        * [.onStreamStopping()](#OBSWebSocket+onStreamStopping)
        * [.onStreamStopped()](#OBSWebSocket+onStreamStopped)
        * [.onRecordingStarting()](#OBSWebSocket+onRecordingStarting)
        * [.onRecordingStarted()](#OBSWebSocket+onRecordingStarted)
        * [.onRecordingStopping()](#OBSWebSocket+onRecordingStopping)
        * [.onRecordingStopped()](#OBSWebSocket+onRecordingStopped)
        * [.onStreamStatus()](#OBSWebSocket+onStreamStatus)
        * [.onExit()](#OBSWebSocket+onExit)
    * _request_
        * [.getVersion(callback)](#OBSWebSocket+getVersion)
        * [.getAuthRequired(callback)](#OBSWebSocket+getAuthRequired)
        * [.authenticate([password])](#OBSWebSocket+authenticate)
        * [.connect(address, password=)](#OBSWebSocket+connect)
        * [.getCurrentScene(callback)](#OBSWebSocket+getCurrentScene)
        * [.setCurrentScene(sceneName)](#OBSWebSocket+setCurrentScene)
        * [.getSceneList(callback)](#OBSWebSocket+getSceneList)
        * [.setSourceVisbility(sourceName, visible)](#OBSWebSocket+setSourceVisbility)
        * [.toggleStreaming()](#OBSWebSocket+toggleStreaming)
        * [.startStreaming()](#OBSWebSocket+startStreaming)
        * [.stopStreaming()](#OBSWebSocket+stopStreaming)
        * [.startStopRecording()](#OBSWebSocket+startStopRecording)
        * [.startRecording()](#OBSWebSocket+startRecording)
        * [.stopRecording()](#OBSWebSocket+stopRecording)
        * [.getStreamStatus(callback)](#OBSWebSocket+getStreamStatus)
        * [.getTransitionList(callback)](#OBSWebSocket+getTransitionList)
        * [.getCurrentTransition(callback)](#OBSWebSocket+getCurrentTransition)
        * [.setCurrentTransition(transitionName)](#OBSWebSocket+setCurrentTransition)

<a name="OBSWebSocket+onConnectionOpened"></a>

### obsWebSocket.onConnectionOpened()
Triggered on socket open.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onConnectionClosed"></a>

### obsWebSocket.onConnectionClosed()
Triggered on socket close.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onConnectionFailed"></a>

### obsWebSocket.onConnectionFailed()
Triggered on socket failure.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onAuthenticationSuccess"></a>

### obsWebSocket.onAuthenticationSuccess()
Triggered on [OBSWebSocket.authenticate](OBSWebSocket.authenticate) success.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onAuthenticationFailure"></a>

### obsWebSocket.onAuthenticationFailure()
Triggered on [OBSWebSocket.authenticate](OBSWebSocket.authenticate) failure.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onSceneSwitch"></a>

### obsWebSocket.onSceneSwitch()
Triggered on Scene Change.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onSceneListChanged"></a>

### obsWebSocket.onSceneListChanged()
Triggered when the scene list is modified (a scene has been created, removed, or renamed).

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onStreamStarting"></a>

### obsWebSocket.onStreamStarting()
Triggered when a request to start streaming has been issued.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onStreamStarted"></a>

### obsWebSocket.onStreamStarted()
Triggered when the stream has successfully started.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onStreamStopping"></a>

### obsWebSocket.onStreamStopping()
Triggered when a request to stop streaming has been issued.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onStreamStopped"></a>

### obsWebSocket.onStreamStopped()
Triggered when the stream has successfully stopped.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onRecordingStarting"></a>

### obsWebSocket.onRecordingStarting()
Triggered when a request to start recording has been issued.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onRecordingStarted"></a>

### obsWebSocket.onRecordingStarted()
Triggered when the recording has successfully started.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onRecordingStopping"></a>

### obsWebSocket.onRecordingStopping()
Triggered when a request to stop streaming has been issued.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onRecordingStopped"></a>

### obsWebSocket.onRecordingStopped()
Triggered when the recording has successfully stopped.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onStreamStatus"></a>

### obsWebSocket.onStreamStatus()
Triggered once per second while streaming. Emits details about the stream status.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+onExit"></a>

### obsWebSocket.onExit()
Triggered when OBS has been closed.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: listener  
<a name="OBSWebSocket+getVersion"></a>

### obsWebSocket.getVersion(callback)
Retrieve OBSWebSocket version information.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  

| Param | Type |
| --- | --- |
| callback | <code>[getVersionCb](#getVersionCb)</code> | 

<a name="OBSWebSocket+getAuthRequired"></a>

### obsWebSocket.getAuthRequired(callback)
Retrieve information about the OBSWebSocket authentication requirements.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  

| Param | Type |
| --- | --- |
| callback | <code>[getAuthRequiredCb](#getAuthRequiredCb)</code> | 

<a name="OBSWebSocket+authenticate"></a>

### obsWebSocket.authenticate([password])
Attempt to authenticate the OBSWebSocket connection.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  

| Param | Type |
| --- | --- |
| [password] | <code>string</code> | 

<a name="OBSWebSocket+connect"></a>

### obsWebSocket.connect(address, password=)
Initialize and authenticate the connection.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  

| Param | Type | Default |
| --- | --- | --- |
| address | <code>string</code> | <code>&quot;localhost&quot;</code> | 
| password= | <code>string</code> |  | 

<a name="OBSWebSocket+getCurrentScene"></a>

### obsWebSocket.getCurrentScene(callback)
Retrieve the currently active scene.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  

| Param | Type |
| --- | --- |
| callback | <code>[getCurrentSceneCb](#getCurrentSceneCb)</code> | 

<a name="OBSWebSocket+setCurrentScene"></a>

### obsWebSocket.setCurrentScene(sceneName)
Set the currently active scene.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  

| Param | Type | Description |
| --- | --- | --- |
| sceneName | <code>string</code> | Scene name. |

<a name="OBSWebSocket+getSceneList"></a>

### obsWebSocket.getSceneList(callback)
Retrieve the list of available scenes.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  

| Param | Type |
| --- | --- |
| callback | <code>[getSceneListCb](#getSceneListCb)</code> | 

<a name="OBSWebSocket+setSourceVisbility"></a>

### obsWebSocket.setSourceVisbility(sourceName, visible)
Set the visibility of a selected source.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  

| Param | Type | Description |
| --- | --- | --- |
| sourceName | <code>string</code> | Name of the source. |
| visible | <code>bool</code> | Whether the source should be visible or not. |

<a name="OBSWebSocket+toggleStreaming"></a>

### obsWebSocket.toggleStreaming()
Toggle streaming state.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  
<a name="OBSWebSocket+startStreaming"></a>

### obsWebSocket.startStreaming()
Start streaming.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  
<a name="OBSWebSocket+stopStreaming"></a>

### obsWebSocket.stopStreaming()
Stop streaming.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  
<a name="OBSWebSocket+startStopRecording"></a>

### obsWebSocket.startStopRecording()
Toggle recording state.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  
<a name="OBSWebSocket+startRecording"></a>

### obsWebSocket.startRecording()
Start recording.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  
<a name="OBSWebSocket+stopRecording"></a>

### obsWebSocket.stopRecording()
Stop recording.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  
<a name="OBSWebSocket+getStreamStatus"></a>

### obsWebSocket.getStreamStatus(callback)
Retrieve details about the stream status.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  

| Param | Type |
| --- | --- |
| callback | <code>[getStreamStatusCb](#getStreamStatusCb)</code> | 

<a name="OBSWebSocket+getTransitionList"></a>

### obsWebSocket.getTransitionList(callback)
Retrieve the list of available transitions.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  

| Param | Type |
| --- | --- |
| callback | <code>[getTransitionListCb](#getTransitionListCb)</code> | 

<a name="OBSWebSocket+getCurrentTransition"></a>

### obsWebSocket.getCurrentTransition(callback)
Retrieve the currently selected transition.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  

| Param | Type |
| --- | --- |
| callback | <code>[getCurrentTransitionCb](#getCurrentTransitionCb)</code> | 

<a name="OBSWebSocket+setCurrentTransition"></a>

### obsWebSocket.setCurrentTransition(transitionName)
Set the currently selected transition.

**Kind**: instance method of <code>[OBSWebSocket](#OBSWebSocket)</code>  
**Category**: request  

| Param | Type |
| --- | --- |
| transitionName | <code>string</code> | 

<a name="getVersionCb"></a>

## getVersionCb : <code>function</code>
Callback for GetVersion.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| obsVersion | <code>string</code> | 

<a name="getAuthRequiredCb"></a>

## getAuthRequiredCb : <code>function</code>
Callback for getAuthRequired.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| authRequired | <code>bool</code> | 
| [salt] | <code>string</code> | 
| [challenge] | <code>string</code> | 

<a name="getCurrentSceneCb"></a>

## getCurrentSceneCb : <code>function</code>
Callback for getCurrentScene.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| scene | <code>[OBSScene](#OBSScene)</code> | 

<a name="getSceneListCb"></a>

## getSceneListCb : <code>function</code>
Callback for getSceneList.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| currentScene | <code>string</code> | Name of the currently active scene. |
| scenes | <code>[Array.&lt;OBSScene&gt;](#OBSScene)</code> | Array of [OBSScene](#OBSScene)s. |

<a name="getStreamStatusCb"></a>

## getStreamStatusCb : <code>function</code>
Callback for getStreamStatus.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| streaming | <code>bool</code> |  |
| recording | <code>bool</code> |  |
| previewOnly | <code>bool</code> | Always false. |
| [bytesPerSec] | <code>int</code> |  |
| [strain] | <code>double</code> |  |
| [totalStreamTime] | <code>int</code> |  |
| [numTotalFrames] | <code>int</code> |  |
| [numDroppedFrames] | <code>int</code> |  |
| [fps] | <code>double</code> |  |

<a name="getTransitionListCb"></a>

## getTransitionListCb : <code>function</code>
Callback for getTransitionList.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| currentTransition | <code>string</code> | 
| transitions | <code>Array.&lt;string&gt;</code> | 

<a name="getCurrentTransitionCb"></a>

## getCurrentTransitionCb : <code>function</code>
Callback for getCurrentTransition.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
