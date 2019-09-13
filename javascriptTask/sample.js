$(document).ready(function(){
  //1.↑DOMが読み込まれたらfunctionを実行するという意味で、「$(document).ready(function()」は省略して「$(function()」と書ける
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
    //4.↑valメソッドでid=national_language＝国語に入力されたvalue値を取得する
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    //↑5.Numberメソッドで数値を整形。「80点」と入力しても「80」に変換
    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum += subject_points[1];
    sum += subject_points[2];
    sum += subject_points[3];
    sum += subject_points[4];
    $("#sum_indicate").text(sum);
    //6.↑textメソッドでsum＝合計点を文字列で取得して表示する
    let average = sum / subject_points.length;
    $("#average_indicate").text(average);
    return average;
    // ここに、上記を参考にして平均点を出力する処理を書き込む
  };

  function get_achievement(){
    let score = score_indicate();
    // let score = $("#average_indicate").text();
    // let rank = "A"
    // if(score < 80 && score >= 60){
    //   rank = "B";
    // }
    // else if(score < 60 && score >= 40) {
    //   rank = "C";
    // }
    // else{
    //   rank = "D";
    // }
    let rank;
    if(score >= 80){
      rank = "A";
    }
    else if(score >= 60) {
      rank = "B";
    }
    else if(score >= 40){
      rank = "C";
    }
    else{
      rank = "D";
    }
    $("#evaluation").text(rank);
    return rank;
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
  };

  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
    //4.↑valメソッドでid=national_language＝国語のvalue値を取得する
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let judge = "合格";
    for(let i = 0; i < subject_points.length; i++){
      if (subject_points[i] < 60){
        judge = "不合格";
        break;
      }
    }
    $("#judge").text(judge);
    return judge;
  };
  // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む

  function judgement(){
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です</label>`);
  };
  //↑7「.append」メソッドによって、選択したid=declarationの後に「あなたの成績は〜」の文字列がlabel要素の値として入る

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  //3.↑5教科の点数が書き換わるごとに表示を変える
  $('#btn-evaluation').click(function() {
    get_achievement();
  });
  //2.↑ランクボタンがクリックされるとget_achievementイベントが実行されランクを表示する

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });
  //判定ボタンがクリックされるとget_pass_or_failureイベントを実行
  $('#btn-declaration').click(function() {
    judgement();
  });
  //最終ジャッジボタンクリック
});
