(function() {var implementors = {};
implementors["riddle"] = [{"text":"impl Clone for RiddleState","synthetic":false,"types":[]}];
implementors["riddle_audio"] = [{"text":"impl Clone for AudioSystemHandle","synthetic":false,"types":[]},{"text":"impl Clone for AudioSystemWeak","synthetic":false,"types":[]},{"text":"impl Clone for Clip","synthetic":false,"types":[]},{"text":"impl Clone for PlayMode","synthetic":false,"types":[]}];
implementors["riddle_common"] = [{"text":"impl&lt;E:&nbsp;Clone&gt; Clone for Color&lt;E&gt;","synthetic":false,"types":[]}];
implementors["riddle_image"] = [{"text":"impl Clone for Image","synthetic":false,"types":[]}];
implementors["riddle_input"] = [{"text":"impl Clone for InputEvent","synthetic":false,"types":[]},{"text":"impl Clone for GamePadId","synthetic":false,"types":[]},{"text":"impl Clone for GamePadButton","synthetic":false,"types":[]},{"text":"impl Clone for GamePadAxis","synthetic":false,"types":[]},{"text":"impl Clone for InputSystemHandle","synthetic":false,"types":[]},{"text":"impl Clone for InputSystemWeak","synthetic":false,"types":[]},{"text":"impl Clone for KeyboardModifiers","synthetic":false,"types":[]}];
implementors["riddle_math"] = [{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Rect&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Vector2&lt;T&gt;","synthetic":false,"types":[]}];
implementors["riddle_platform_common"] = [{"text":"impl Clone for LogicalSize","synthetic":false,"types":[]},{"text":"impl Clone for LogicalPosition","synthetic":false,"types":[]},{"text":"impl Clone for LogicalVec2","synthetic":false,"types":[]},{"text":"impl Clone for PlatformEvent","synthetic":false,"types":[]},{"text":"impl Clone for MouseButton","synthetic":false,"types":[]},{"text":"impl Clone for Scancode","synthetic":false,"types":[]},{"text":"impl Clone for VirtualKey","synthetic":false,"types":[]},{"text":"impl Clone for WindowId","synthetic":false,"types":[]}];
implementors["riddle_platform_winit"] = [{"text":"impl Clone for PlatformSystemHandle","synthetic":false,"types":[]},{"text":"impl Clone for PlatformSystemWeak","synthetic":false,"types":[]},{"text":"impl Clone for WindowHandle","synthetic":false,"types":[]},{"text":"impl Clone for WindowWeak","synthetic":false,"types":[]}];
implementors["riddle_renderer_wgpu"] = [{"text":"impl Clone for RendererHandle","synthetic":false,"types":[]},{"text":"impl Clone for RendererWeak","synthetic":false,"types":[]},{"text":"impl Clone for SpriteRenderCommand","synthetic":false,"types":[]}];
implementors["riddle_time"] = [{"text":"impl Clone for TimeSystemHandle","synthetic":false,"types":[]},{"text":"impl Clone for TimeSystemWeak","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()