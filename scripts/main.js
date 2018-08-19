showCalList = function(callback) {

  // 「他のカレンダー」を折りたたむ
  var isCollapsed = $('[role="complementary"] div[aria-label="他のカレンダー"]').parent().data('collapsed');
  var collapseToggle = $('[role="complementary"] content:contains("他のカレンダー")')
  var sleepTime = 0;

  if(!isCollapsed){
    collapseToggle.click();
    sleepTime = 200;
  }

  // コールバックを実行して、「他のカレンダー」を再度展開する
  setTimeout(function() {
    callback();
    collapseToggle.click();
  }, sleepTime);

};


hiddenAllCal = function() {

  // すべてのカレンダーを非表示
  $('[role="complementary"] div[aria-checked="true"]').closest('label').click();

};


showTargetCal　= function() {

  // 表示するユーザーをコンソールに出力
  console.log(groupUsers);

  // 対象のカレンダーを表示
  for(i=0; i<groupUsers.length; i++){
    $('[role="complementary"] div[aria-label="' + groupUsers[i] + '"]').click();
  }

};


showCalList(function() {
  hiddenAllCal();
  showTargetCal();
});