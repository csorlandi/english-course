import React from 'react';

import AudioLesson from '~/pages/MainStack/LessonStack/AudioLesson';
import DissertativeLesson from '~/pages/MainStack/LessonStack/DissertativeLesson';
import IntroductionLesson from '~/pages/MainStack/LessonStack/IntroductionLesson';
import MultipleChoiceLesson from '~/pages/MainStack/LessonStack/MultipleChoiceLesson';
import OverviewLesson from '~/pages/MainStack/LessonStack/OverviewLesson';
import TranslateLesson from '~/pages/MainStack/LessonStack/TranslateLesson';
import VideoLesson from '~/pages/MainStack/LessonStack/VideoLesson';
import WordPairsLesson from '~/pages/MainStack/LessonStack/WordPairsLesson';

import { Stack } from './navigators';

export default function LessonStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="introduction-lesson" component={IntroductionLesson} />
      <Stack.Screen name="audio-lesson" component={AudioLesson} />
      <Stack.Screen name="dissertative-lesson" component={DissertativeLesson} />
      <Stack.Screen
        name="multiple-choice-lesson"
        component={MultipleChoiceLesson}
      />
      <Stack.Screen name="overview-lesson" component={OverviewLesson} />
      <Stack.Screen name="translate-lesson" component={TranslateLesson} />
      <Stack.Screen name="video-lesson" component={VideoLesson} />
      <Stack.Screen name="word-pairs-lesson" component={WordPairsLesson} />
    </Stack.Navigator>
  );
}
