import React, { useEffect } from 'react';
import './About.css';

function About({ className }) {
  useEffect(() => {
    console.log('About mounted with className:', className);
  }, [className]);

  return (
    <section id="about" className={`about ${className || ''}`}>
      <h3>Biography : suzushiro</h3>
      <p>
        菊田悟 キクタサトル 
      </p>
      <p>
        <strong>3~4deckをフルに使ったダンスフロア、ニューロファンクを主軸としたプレイと変態的なまでの収集癖から生まれた緻密な選曲は、オーディエンスから定評を得ている。写真活動ではDJスタイルとは裏腹に儚さや繊細さで見るものの心を掴む二面性が特徴である。</strong>
      </p>
      <p>
        DJ,写真家,インフラエンジニア / 市川市在住
      </p>
      <p>
        1992年 仙台市に生まれる。
      </p>
      <p>
      2015年 音楽アプリケーションやウェアラブル端末のUIに着眼点を置き、デザイン学士を取得後、東京に憧れ関東に就職。
      </p>
      <p>
      2017年 渋谷ClubasiaのリッジレーサーシリーズオンリーイベントRidge Racer fesを皮切りにクラブミュージックに傾倒。程なく渋谷WOMBの当時の定期イベントFLASH!!!、06Sを通しドラムンベースに出会う。
      </p>
      <p>
      2021年 ガールズポートレートを中心に写真家としての活動を始める。
      </p>
      <p>
      2022年 池袋One'sにて盟友Shindaiと共にドラムンベースを主軸としたクラブイベントCyber Hiratsuka Dancersの定期開催、オーガナイズを開始する。
      </p>
    </section>
  );
}

export default About;