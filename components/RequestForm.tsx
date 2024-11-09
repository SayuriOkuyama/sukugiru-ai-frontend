"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import React from "react";

type RequestFormProps = {
  setData: (data: string) => void;
};

export default function RequestForm({ setData }: RequestFormProps) {
  const sdgsItems = [
    "貧困をなくそう",
    "飢餓をゼロに",
    "すべての人に健康と福祉を",
    "質の高い教育をみんなに",
    "ジェンダー平等を実現しよう",
    "安全な水とトイレを世界中に",
    "エネルギーをみんなに そしてクリーンに",
    "働きがいも経済成長も",
    "産業と技術革新の基盤をつくろう",
    "人や国の不平等をなくそう",
    "住み続けられるまちづくりを",
    "つくる責任 つかう責任",
    "気候変動に具体的な対策を",
    "海の豊かさを守ろう",
    "陸の豊かさも守ろう",
    "平和と公正をすべての人に",
    "パートナーシップで目標を達成しよう",
  ];

  const handleClick = async (event: React.FormEvent) => {
    event.preventDefault(); // デフォルトのフォーム送信を防ぐ

    const res = await axios.get("http://localhost:8080");
    console.log(res.data);
    setData(res.data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-5xl">
        <div className="bg-primary/5 p-6 rounded-t-lg">
          <h1 className="text-3xl font-bold text-center text-primary">
            オリジナルテーマ クリエイター
          </h1>
        </div>
        <form className="bg-white p-6 rounded-b-lg shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6">
            <div className="space-y-6 lg:pr-6 lg:border-r lg:border-gray-200">
              <h2 className="text-xl font-semibold text-primary mb-4">
                個人情報
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-lg font-medium">
                    年齢
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      id="age"
                      className="w-20"
                      min="0"
                      max="120"
                    />
                    <span>歳</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-lg font-medium">性別</Label>
                  <RadioGroup defaultValue="male">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">男性</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">女性</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">その他</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label className="text-lg font-medium">職種</Label>
                  <RadioGroup defaultValue="engineer">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="engineer" id="engineer" />
                      <Label htmlFor="engineer">エンジニア</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="designer" id="designer" />
                      <Label htmlFor="designer">デザイナー</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-lg font-medium">
                    経験年数
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      id="experience"
                      className="w-20"
                      min="0"
                      max="100"
                    />
                    <span>年</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:pl-6">
              <h2 className="text-xl font-semibold text-primary mb-4">
                興味・関心
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-lg font-medium">
                    興味のあるSDGsの項目（複数選択可）
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sdgsItems.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`sdgs-${index}`} />
                        <Label htmlFor={`sdgs-${index}`} className="text-sm">
                          {item}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hobby" className="text-lg font-medium">
                    趣味
                  </Label>
                  <Textarea
                    id="hobby"
                    placeholder="趣味を入力してください"
                    className="h-24"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={handleClick}
            className="w-full text-lg px-6 py-3 mt-8"
          >
            送信する
          </Button>
        </form>
      </div>
    </div>
  );
}
