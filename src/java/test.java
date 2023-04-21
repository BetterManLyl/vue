// Import the necessary classes for text-to-speech conversion
import android.speech.tts.TextToSpeech;
import android.speech.tts.TextToSpeech.OnInitListener;

// Initialize the TextToSpeech object
TextToSpeech tts = new TextToSpeech(context, new OnInitListener() {
    @Override
    public void onInit(int status) {
        if (status == TextToSpeech.SUCCESS) {
            // Set the language for text-to-speech conversion
            int result = tts.setLanguage(Locale.CHINESE);
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                // Handle error if language is not supported
            } else {
                // Convert text to speech
                tts.speak("文本转语音", TextToSpeech.QUEUE_FLUSH, null);
            }
        } else {
            // Handle error if TextToSpeech initialization fails
        }
    }
});
// To set the voice for text-to-speech conversion, use the setVoice() method of the TextToSpeech object
// For example, to set the voice to a male voice, use the following code:
tts.setVoice(new Voice("en-us-x-sfg#male_1-local", new Locale("en", "US"), Voice.QUALITY_HIGH, Voice.LATENCY_NORMAL, false, null)); 

// Replace "en-us-x-sfg#male_1-local" with the voice identifier for the desired voice. 
// You can find a list of available voices by calling the getVoices() method of the TextToSpeech object.


// 以上代码演示了如何使用Android的TextToSpeech类将文本转换为语音
// 通过调用setLanguage()方法设置语言，调用speak()方法将文本转换为语音
// 若要设置语音，可以使用setVoice()方法，并将所需语音的标识符作为参数传递
// 可以通过调用getVoices()方法获取可用语音的列表