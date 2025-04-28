import React, { useState, useEffect } from 'react';
import './Biography.css';

function Biography() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('Biography component mounted');
    const timer = setTimeout(() => {
      console.log('Triggering fade-in for Biography');
      setIsVisible(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // タイムラインデータを構造化
  const timelineEvents = [
    { year: '1992年', description: '仙台市に生まれる。' },
    { year: '2015年', description: '音楽アプリケーションやウェアラブル端末のUIに着眼点を置き、デザイン学士を取得後、東京に憧れ関東に就職。' },
    { year: '2017年', description: '渋谷ClubasiaのリッジレーサーシリーズオンリーイベントRidge Racer fesを皮切りにクラブミュージックに傾倒。程なく渋谷WOMBの当時の定期イベントFLASH!!!、06Sを通しドラムンベースに出会う。' },
    { year: '2021年', description: 'ガールズポートレートを中心に写真家としての活動を始める。' },
    { year: '2022年', description: '池袋One\'sにて盟友Shindaiと共にドラムンベースを主軸としたクラブイベントCyber Hiratsuka Dancersの定期開催、オーガナイズを開始する。' },
  ];

  return (
    <section id="biography" className={`biography ${isVisible ? 'animate' : ''}`}>
      <h3>Biography : suzushiro</h3>
      <p>菊田悟 キクタサトル</p>
      <p>DJ, 写真家, インフラエンジニア / 市川市在住</p>
      <p>
        <strong>
          3~4deckをフルに使ったダンスフロア、ニューロファンクを主軸としたプレイと変態的なまでの収集癖から生まれた緻密な選曲と構成は、オーディエンスのみならずプレーヤーからも定評を得ている。写真活動ではDJスタイルとは裏腹に儚さや繊細さで見るものの心を掴む二面性が特徴である。
        </strong>
      </p>

      {/* タイムライン */}
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-content">{event.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Biography;