(function() {var implementors = {};
implementors["riddle"] = [{"text":"impl&lt;'a&gt; Freeze for RiddleContext&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Freeze for RiddleLib","synthetic":true,"types":[]},{"text":"impl Freeze for RiddleState","synthetic":true,"types":[]},{"text":"impl Freeze for RiddleError","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]}];
implementors["riddle_audio"] = [{"text":"impl !Freeze for AudioSystem","synthetic":true,"types":[]},{"text":"impl Freeze for AudioSystemHandle","synthetic":true,"types":[]},{"text":"impl Freeze for AudioSystemWeak","synthetic":true,"types":[]},{"text":"impl Freeze for Clip","synthetic":true,"types":[]},{"text":"impl Freeze for ClipPlayer","synthetic":true,"types":[]},{"text":"impl Freeze for ClipPlayerBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for PlayMode","synthetic":true,"types":[]},{"text":"impl Freeze for AudioError","synthetic":true,"types":[]}];
implementors["riddle_common"] = [{"text":"impl&lt;E&gt; Freeze for Color&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for CommonError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Freeze for EventPub&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for EventSub&lt;T&gt;","synthetic":true,"types":[]}];
implementors["riddle_font"] = [{"text":"impl Freeze for TTFont","synthetic":true,"types":[]},{"text":"impl Freeze for FontError","synthetic":true,"types":[]}];
implementors["riddle_image"] = [{"text":"impl Freeze for Image","synthetic":true,"types":[]},{"text":"impl Freeze for ImageError","synthetic":true,"types":[]}];
implementors["riddle_input"] = [{"text":"impl Freeze for GamePadId","synthetic":true,"types":[]},{"text":"impl !Freeze for InputSystem","synthetic":true,"types":[]},{"text":"impl Freeze for InputSystemHandle","synthetic":true,"types":[]},{"text":"impl Freeze for InputSystemWeak","synthetic":true,"types":[]},{"text":"impl !Freeze for InputMainThreadState","synthetic":true,"types":[]},{"text":"impl Freeze for KeyboardModifiers","synthetic":true,"types":[]},{"text":"impl Freeze for InputError","synthetic":true,"types":[]},{"text":"impl Freeze for InputEvent","synthetic":true,"types":[]},{"text":"impl Freeze for GamePadButton","synthetic":true,"types":[]},{"text":"impl Freeze for GamePadAxis","synthetic":true,"types":[]}];
implementors["riddle_math"] = [{"text":"impl&lt;T&gt; Freeze for Rect&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Vector2&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["riddle_platform_common"] = [{"text":"impl Freeze for LogicalSize","synthetic":true,"types":[]},{"text":"impl Freeze for LogicalPosition","synthetic":true,"types":[]},{"text":"impl Freeze for LogicalVec2","synthetic":true,"types":[]},{"text":"impl Freeze for WindowId","synthetic":true,"types":[]},{"text":"impl Freeze for PlatformEvent","synthetic":true,"types":[]},{"text":"impl Freeze for MouseButton","synthetic":true,"types":[]},{"text":"impl Freeze for Scancode","synthetic":true,"types":[]},{"text":"impl Freeze for VirtualKey","synthetic":true,"types":[]},{"text":"impl Freeze for MockWindow","synthetic":true,"types":[]}];
implementors["riddle_platform_winit"] = [{"text":"impl&lt;'a&gt; Freeze for PlatformContext&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Freeze for PlatformSystem","synthetic":true,"types":[]},{"text":"impl Freeze for PlatformSystemHandle","synthetic":true,"types":[]},{"text":"impl Freeze for PlatformSystemWeak","synthetic":true,"types":[]},{"text":"impl !Freeze for PlatformMainThreadState","synthetic":true,"types":[]},{"text":"impl !Freeze for Window","synthetic":true,"types":[]},{"text":"impl Freeze for WindowHandle","synthetic":true,"types":[]},{"text":"impl Freeze for WindowWeak","synthetic":true,"types":[]},{"text":"impl Freeze for WindowBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for PlatformError","synthetic":true,"types":[]}];
implementors["riddle_renderer_wgpu"] = [{"text":"impl Freeze for Renderer","synthetic":true,"types":[]},{"text":"impl Freeze for RendererHandle","synthetic":true,"types":[]},{"text":"impl Freeze for RendererWeak","synthetic":true,"types":[]},{"text":"impl Freeze for Sprite","synthetic":true,"types":[]},{"text":"impl Freeze for SpriteRenderCommand","synthetic":true,"types":[]},{"text":"impl Freeze for SpriteBuilder","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for SpriteAtlasBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SpriteRenderTarget","synthetic":true,"types":[]},{"text":"impl Freeze for RendererError","synthetic":true,"types":[]},{"text":"impl Freeze for FilterMode","synthetic":true,"types":[]},{"text":"impl !Freeze for WindowWGPUDevice","synthetic":true,"types":[]}];
implementors["riddle_time"] = [{"text":"impl !Freeze for TimeSystem","synthetic":true,"types":[]},{"text":"impl Freeze for TimeSystemHandle","synthetic":true,"types":[]},{"text":"impl Freeze for TimeSystemWeak","synthetic":true,"types":[]},{"text":"impl Freeze for TimerHandle","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()